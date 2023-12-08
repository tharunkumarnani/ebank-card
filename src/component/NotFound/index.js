import './index.css'

const NotFound = () => (
  <div className="not-found">
    <img
      alt="not found"
      className="not-img"
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
    />
    <h1 className="heading">Page Not Found</h1>
    <p className="des">
      We are sorry, the page you requested could not be found.
    </p>
  </div>
)

export default NotFound
