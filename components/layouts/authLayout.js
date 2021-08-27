/* eslint-disable react/prop-types */

export default function AuthLayout({ children }) {
  return (
    <div className="authLayout d-flex">
      <div className="authLayout__box m-auto shadow--md">
        <div
          className="authLayout__left"
        />
        <div className="authLayout__right">{children}</div>
      </div>
    </div>
  );
}
