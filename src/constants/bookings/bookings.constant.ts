export const ONE_NIGHT = 1;
export const LESS_MULTIPE_NIGHTS = 10;

export enum SortFilterValues {
    CHECK_IN_DATE = "checkinDate",
    CREATED_AT = "createdAt",
    TOTAL_PRICE = "totalPrice"
}

export enum SortOrderValues {
    ASC = "ASC",
    DESC = "DESC",
}

export enum BookingStatus {
    PENDING = "pending",
    REJECTED = "rejected",
    APPROVED = "approved",
    CANCELED = "canceled",
    BLOCKED = "blocked",
    CREATED = "created",
    UDPATED = "updated",
}

export enum SegmentTypes {
    LIST = "list",
    CREATE = "create",
}

export enum FilterTabValues {
    NOT_APPROVED = "notApproved",
    FUTURE = "future",
    ARCHIEVED = "archived"
}
export enum FilterCounter {
    ALL = "All",
    ONE = "1",
    TWO = "2",
    THREE = "3",
    FOUR = "4",
    FIVE_MORE = "5+"
}