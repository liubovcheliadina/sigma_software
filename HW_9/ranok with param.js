
web.init();
web.open('https://www.ranok.com.ua/');

web.open('https://www.ranok.com.ua/');

web.selectWindow('title=Видавництво Ранок - це якісні книжки для всебічного розвитку дітей та дорослих');
//             name: name=q
// xpath:attributes: //input[@name=\'q\']
// xpath:idRelative: //form[@id=\'form-search\']/div/input
//   xpath:position: //header/div[2]/div/form/div/input
//              css: css=#form-search > div > input
web.click('name=q');

//             name: name=q
// xpath:attributes: //input[@name=\'q\']
// xpath:idRelative: //form[@id=\'form-search\']/div/input
//   xpath:position: //header/div[2]/div/form/div/input
//              css: css=#form-search > div > input
web.type('name=q', '${search}');

//              css: css=#form-search > button > svg
web.click('css=#form-search > button > svg');

//       xpath:href: (//a[contains(@href, \'https://www.ranok.com.ua/info-stopoverkhoviy-avtobus-35874.html\')])[1]
//   xpath:position: //div[4]/div[2]/div[1]/div[1]/div[1]/a
//              css: css=body > div.wrapper > div.search-block.search-products > div.search-block__main > div.catalog__list > div:nth-child(1) > div.product__image > a
web.click('//div[4]/div[2]/div[1]/div[1]/div[1]/a');

web.selectWindow('title=${catalog__list}');
web.assertTitle('${product__image-link}');

//   xpath:position: //header
//              css: css=body > div.wrapper > header
web.click('//header');

// xpath:idRelative: //div[@id=\'tab_1\']/div/div/div[2]/div[1]
//   xpath:position: //div[3]/div[3]/div/div[3]/div[3]/div/div/div/div/div[2]/div[1]
//              css: css=#tab_1 > div > div > div.paper-book__head-right > div.product-page__buy.product-page__buy--expected.no-pin-cart.cart-buy
web.click('//div[@id=\'tab_1\']/div/div/div[2]/div[1]');

//              css: css=body > div.wrapper > header > div.header__main > div > div.header-links > a:nth-child(4) > svg
web.click('css=body > div.wrapper > header > div.header__main > div > div.header-links > a:nth-child(4) > svg');

web.selectWindow('title=Кошик - Видавництво Ранок - це якісні книжки для всебічного розвитку дітей та дорослих');
//              css: css=body > div.wrapper > div.cart-page > div > div.cart-page__products > div > div.cart-product__options > div.cart-product__options-item.product-quantity__block > div.cart-product__options-value > div > button.product-quantity__button.product-quantity__plus > svg > path
web.click('css=body > div.wrapper > div.cart-page > div > div.cart-page__products > div > div.cart-product__options > div.cart-product__options-item.product-quantity__block > div.cart-product__options-value > div > button.product-quantity__button.product-quantity__plus > svg > path');

web.selectWindow('title=Кошик - Видавництво Ранок - це якісні книжки для всебічного розвитку дітей та дорослих');
//              css: css=body > div.wrapper > div.cart-page > div > div.cart-page__products > div > div.cart-product__options > div.cart-product__options-item.product-quantity__block > div.cart-product__options-value > div > button.product-quantity__button.product-quantity__plus > svg > path
web.click('css=body > div.wrapper > div.cart-page > div > div.cart-page__products > div > div.cart-product__options > div.cart-product__options-item.product-quantity__block > div.cart-product__options-value > div > button.product-quantity__button.product-quantity__plus > svg > path');

web.selectWindow('title=Кошик - Видавництво Ранок - це якісні книжки для всебічного розвитку дітей та дорослих');
//              css: css=body > div.wrapper > div.cart-page > div > div.cart-page__products > div > div.cart-product__delete > svg
web.click('css=body > div.wrapper > div.cart-page > div > div.cart-page__products > div > div.cart-product__delete > svg');

