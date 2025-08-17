import { Link } from "react-router-dom";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="breadcrumb" className="mb-4">
      <ol className="breadcrumb">
        {items.map((item, idx) => (
          <li
            key={idx}
            className={`breadcrumb-item ${
              idx === items.length - 1 ? "active" : ""
            }`}
            aria-current={idx === items.length - 1 ? "page" : undefined}
          >
            {idx === items.length - 1 ? (
              item.label
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
