import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "./Result.css";

export default function Result({ score, total, display }) {
  if (display === "false") {
    return null;
  } else if (display === "true") {
    return (
      <div className="container1">
        <div className="content">
          <Card sx={{ minWidth: 200, textAlign: "center", padding: 5 }}>
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              <div className="ended">Quiz Ended!</div> Your score is{" "}
              <span className="score">{score}</span> out of{" "}
              <span className="total">{total}</span>
            </Typography>
            <button size="small" onClick={() => window.location.reload()}>
              Restart Quiz
            </button>
          </Card>
        </div>
      </div>
    );
  }
}
