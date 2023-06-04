import ShopsNav from "modules/ShopsNav/ShopsNav";
import ShopList from "modules/ShopList/ShopList";

import css from './shopPage.module.scss'

const ShopPage = () => {
    return (
      <div className={css.markupPage}>
        <ShopsNav />
        <ShopList />
      </div>
    );
}
export default ShopPage;