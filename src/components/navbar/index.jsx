import Link from "next/Link";
import "./styles.scss";

export default function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link href="/">Trang chủ</Link>
        </li>
        <li>
          <Link href="/about">Về chúng tôi</Link>
        </li>
        <li>
          <Link href="/buy">Mua</Link>
        </li>
        <li>
          <Link href="/news">Tin tức</Link>
        </li>
        <li>
          <Link href="/rent">Cho thuê</Link>
        </li>
        <li>
          <Link href="/sell">Bán</Link>
        </li>
        <li>
          <Link href="/services"> Dịch vụ BĐS</Link>
        </li>
        <li>
          <Link href="/signin">Đăng nhập</Link>
        </li>
      </ul>
    </nav>
  );
}
