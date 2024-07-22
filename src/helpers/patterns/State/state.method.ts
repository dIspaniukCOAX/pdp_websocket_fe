interface State {
  play(): void;
  pause(): void;
  stop(): void;
}

export class MediaPlayer {
  public playingState: State;

  public pausedState: State;

  public stoppedState: State;

  private currentState: State;

  constructor() {
    this.playingState = new PlayingState(this);
    this.pausedState = new PausedState(this);
    this.stoppedState = new StoppedState(this);

    this.currentState = this.stoppedState; // Initial state
  }

  setState(state: State): void {
    this.currentState = state;
  }

  play(): void {
    this.currentState.play();
  }

  pause(): void {
    this.currentState.pause();
  }

  stop(): void {
    this.currentState.stop();
  }
}

class PlayingState implements State {
  //eslint-disable-next-line no-useless-constructor
  constructor(private mediaPlayer: MediaPlayer) {}

  play(): void {
    console.log("Already playing.");
  }

  pause(): void {
    console.log("Pausing the media.");
    this.mediaPlayer.setState(this.mediaPlayer.pausedState);
  }

  stop(): void {
    console.log("Stopping the media.");
    this.mediaPlayer.setState(this.mediaPlayer.stoppedState);
  }
}

class PausedState implements State {
  //eslint-disable-next-line no-useless-constructor
  constructor(private mediaPlayer: MediaPlayer) {}

  play(): void {
    console.log("Resuming the media.");
    this.mediaPlayer.setState(this.mediaPlayer.playingState);
  }

  pause(): void {
    console.log("Already paused.");
  }

  stop(): void {
    console.log("Stopping the media.");
    this.mediaPlayer.setState(this.mediaPlayer.stoppedState);
  }
}

class StoppedState implements State {
  //eslint-disable-next-line no-useless-constructor
  constructor(private mediaPlayer: MediaPlayer) {}

  play(): void {
    console.log("Starting the media.");
    this.mediaPlayer.setState(this.mediaPlayer.playingState);
  }

  pause(): void {
    console.log("Cannot pause. The media is stopped.");
  }

  stop(): void {
    console.log("Already stopped.");
  }
}
