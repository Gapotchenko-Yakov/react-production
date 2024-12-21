import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Link to="/" className={cls.mainLink}>
          Главная
        </Link>
        <Link to="/about">О сайте</Link>
      </div>
    </div>
  );
};

export default Navbar;
