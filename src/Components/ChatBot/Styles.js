export const styles = {
  chatWithMeButton: {
    cursor: "pointer",
    boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
    borderRadius: "50%",
    backgroundImage: `url(https://res.cloudinary.com/egfscholar/image/upload/v1681420051/chat_nrqged.gif)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "84px",
    width: "65px",
    height: "65px",
  },
  avatarHello: {
    position: "absolute",
    left: "calc(-100% - 80px - 28px)",
    top: "calc(50% - 24px)",
    zIndex: "10000",
    boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
    padding: "12px 12px 12px 16px",
    borderRadius: "24px",
    backgroundColor: "#ce4040",
    color: "white",
  },
  supportWindow: {
    position: "fixed",
    bottom: "116px",
    right: "24px",
    width: "420px",
    height: "530px",
    maxWidth: "calc(100% - 48px)",
    maxHeight: "calc(100% - 48px)",
    backgroundColor: "transparent",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",

    overflow: "hidden",
    boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
  },

  chatEngineWindow: {
    width: "100%",
    backgroundColor: "#fff",
  },
};
