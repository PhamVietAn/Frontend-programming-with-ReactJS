export default function LoadingSpinner() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.25)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "70px",
          height: "70px",
          border: "8px solid #f3f3f3",
          borderTop: "8px solid #007bff",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          background: "transparent",
        }}
      />
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}