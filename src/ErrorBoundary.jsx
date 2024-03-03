import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary component cought an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          there is an error with this listing.{" "}
          <Link to="/">Click here to ga back to the home page.</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
