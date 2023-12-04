import styles from "./MediaButtons.module.css";
import { useState, useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import StopIcon from "@mui/icons-material/Stop";

const MediaButtons = ({ onPressButton, place, classNames }) => {
  const [togleButtons, setTogleButtons] = useState();

  useEffect(() => {
    if (place === "card") {
      setTogleButtons(true);
    } else {
      setTogleButtons(false);
    }
  }, [place]);

  return (
    <div className={`${styles.MediaButtons} ${classNames}`}>
      <a
        href="#"
        className="btn-floating btn-small waves-effect waves-light red"
        // disabled={taskCtx.startSending}
        onClick={onPressButton({ type: "PLAY" })}
      >
        <PlayArrowIcon />
      </a>

      {togleButtons && (
        <>
          <a
            href="#"
            className="btn-floating btn-small waves-effect waves-light red hidden"
            // disabled={!taskCtx.startSending}
            onClick={onPressButton({ type: "PAUSE" })}
          >
            <PauseIcon />
          </a>
          <a
            href="#"
            className="btn-floating btn-small waves-effect waves-light red"
            // disabled={!taskCtx.startSending}
            onClick={onPressButton({ type: "STOP" })}
          >
            <StopIcon />
          </a>
        </>
      )}
    </div>
  );
};

export default MediaButtons;
