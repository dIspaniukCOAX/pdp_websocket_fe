import React, { useEffect, useRef } from "react";
import { CountrySelector, usePhoneInput } from "react-international-phone";
import { Button, Input, InputRef, Space } from "antd";

import styles from "./PhoneField.module.scss";

import "react-international-phone/style.css";

interface AntPhoneProps {
  value: string | null;
  onChange: (phone: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const AntPhone: React.FC<AntPhoneProps> = ({ value, onChange, placeholder, disabled }) => {
  const phoneInput = usePhoneInput({
    defaultCountry: "ua",
    value: value || "",
    disableDialCodePrefill: true,
    onChange: (data) => {
      onChange(data.phone);
    }
  });

  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (phoneInput.inputRef && inputRef.current?.input) {
      phoneInput.inputRef.current = inputRef.current.input;
    }
  }, [inputRef, phoneInput.inputRef]);

  return (
    <div className={styles.phone__container}>
      <Space.Compact>
        <CountrySelector
        disabled={disabled}
          selectedCountry={phoneInput.country.iso2}
          onSelect={(country) => phoneInput.setCountry(country.iso2)}
          renderButtonWrapper={({ children, rootProps }) => (
            <Button
              {...rootProps}
              style={{
                padding: "4px",
                height: "100%",
                zIndex: 1 // fix focus overlap
              }}
            >
              {children}
            </Button>
          )}
          dropdownStyleProps={{
            style: {
              top: "35px"
            }
          }}
        />
        <Input
          disabled={disabled}
          placeholder={placeholder}
          type="tel"
          value={phoneInput.phone}
          onChange={phoneInput.handlePhoneValueChange}
          ref={inputRef}
          className={styles.phone__input}
          onFocus={() => {
            if (phoneInput.phone.length < 3) {
              phoneInput.setCountry(phoneInput.country.iso2);
            }
          }}
        />
      </Space.Compact>
    </div>
  );
};
