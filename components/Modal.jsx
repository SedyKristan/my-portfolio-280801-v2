"use client";

import { useState } from "react";
import {
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import useMeasure from "react-use-measure";

const Modal = ({ children, showModal, setShowModal }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const controls = useDragControls();

  const y = useMotionValue(0);

  const handleClose = async () => {
    animate(scope.current, { opacity: [1, 0] });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#modal", { y: [yStart, height] });

    setShowModal(false);
  };

  return (
    showModal && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={handleClose}
        ref={scope}
        className="fixed inset-0 z-50 bg-light-overlay"
      >
        <motion.div
          ref={drawerRef}
          id="modal"
          onClick={(event) => event.stopPropagation()}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          style={{ y }}
          transition={{ ease: "easeInOut" }}
          onDragEnd={() => {
            if (y.get() >= 100) {
              handleClose();
            }
          }}
          drag="y"
          dragControls={controls}
          dragListener={false}
          dragConstraints={{
            top: 0,
            bottom: 0,
          }}
          dragElastic={{
            top: 0,
            bottom: 0.5,
          }}
          className="absolute bottom-0 w-full h-[75vh] overflow-hidden rounded-t-[40px] bg-light-primary pt-8"
        >
          <div className="absolute left-0 right-0 top-0 z-10 flex justify-center p-1">
            <button
              onPointerDown={(event) => {
                controls.start(event);
              }}
              className="h-1 w-[124px] cursor-grab touch-none rounded-full bg-border-light-primary active:cursor-grabbing"
            ></button>
          </div>
          <div className="relative z-0 h-full overflow-y p-6">{children}</div>
        </motion.div>
      </motion.div>
    )
  );
};

export default Modal;
