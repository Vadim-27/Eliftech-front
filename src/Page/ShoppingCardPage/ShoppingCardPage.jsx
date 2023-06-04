import UserInfo from "modules/UserInfo/UserInfo";
import OrderList from "modules/OrderList/OrderList";
import css from "./shopingCardPage.module.scss"

const ShopingCardPage = () => {
    return (
      <div className={css.markupPage}>
            <UserInfo />
            <OrderList/>
      </div>
    );
}
export default ShopingCardPage;