import { expect } from '@playwright/test';
export class ShopPage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
        this.page = page;
        this.title = page.locator('div[class="login_logo"]')
        this.firstProductAddToCartButton = page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]')
        this.secondProductAddToCartButton = page.locator('button[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.thirdProductAddToCartButton = page.locator('button[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
        this.fourthProductAddToCartButton = page.locator('button[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
        this.fifthProductAddToCartButton = page.locator('button[data-test="add-to-cart-sauce-labs-onesie"]')
        this.sixthProductAddToCartButton = page.locator('button[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
        this.firstProductRemoveButton = page.locator('button[data-test="remove-sauce-labs-backpack"]')
        this.secondProductRemoveButton = page.locator('button[data-test="remove-sauce-labs-bike-light"]')
        this.thirdProductRemoveButton = page.locator('button[data-test="remove-sauce-labs-bolt-t-shirt"]')
        this.fourthProductRemoveButton = page.locator('button[data-test="remove-sauce-labs-fleece-jacket"]')
        this.fifthProductRemoveButton = page.locator('button[data-test="remove-sauce-labs-onesie"]')
        this.sixthProductRemoveButton = page.locator('button[data-test="remove-test.allthethings()-t-shirt-(red)"]')
        this.shoppingCartIcon = page.locator('a[data-test="shopping-cart-link"]')
        this.shoppingCartCountNumber = page.locator('span[data-test="shopping-cart-badge"]')
        this.sectionProductsTitle = page.locator('span[data-test="title"]')
        this.productsNames = page.locator('div[data-test="inventory-item-name"]')
        this.productsPrices = page.locator('div[data-test="inventory-item-price"]')
        this.filter = page.locator('[data-test="product-sort-container"]')
        this.activeFilter = page.locator('[data-test="active-option"]')
        this.burgerMenuButton = page.locator('div[class="bm-burger-button"]')
        this.burgerMenuCrossButton = page.locator('div[class="bm-cross-button"]')
        this.logout = page.locator('div [data-test="logout-sidebar-link"]')
        this.allIteams = page.locator('div [data-test="inventory-sidebar-link"]')
        this.about = page.locator('div [data-test="about-sidebar-link"]')
        this.resetAppState = page.locator('div [data-test="reset-sidebar-link"]')
        this.burgerMenuList = page.locator('div [class="bm-item-list"]')
    }
    async openProductByName(name) {
        await this.productsNames
            .filter({ hasText: name })
            .first()
            .click();
    }

    async getProductsNames() {
        return await this.productsNames.allTextContents();
    }

    async getProductsPrices() {
        const prices = await this.productsPrices.allTextContents();

        return prices.map(price =>
            Number(price.replace('$', ''))
        );
    }

    async selectFilter(value) {
        await this.filter.selectOption(value);
    }

    async expectProductsSortedAToZ() {
        const actual = await this.getProductsNames();
        const expected = [...actual].sort();

        expect(actual).toEqual(expected);
    }

    async expectProductsSortedZToA() {
        const actual = await this.getProductsNames();
        const expected = [...actual].sort().reverse();

        expect(actual).toEqual(expected);
    }

    async expectProductsSortedLowToHigh() {
        const actual = await this.getProductsPrices();
        const expected = [...actual].sort((a, b) => a - b);

        expect(actual).toEqual(expected);
    }

    async expectProductsSortedHighToLow() {
        const actual = await this.getProductsPrices();
        const expected = [...actual].sort((a, b) => b - a);

        expect(actual).toEqual(expected);
    }

    async clickFirstProductAddToCartButton() {
        await this.firstProductAddToCartButton.click()
    }
    async clickSecondProductAddToCartButton() {
        await this.secondProductAddToCartButton.click()
    }
    async clickThirdProductAddToCartButton() {
        await this.thirdProductAddToCartButton.click()
    }
    async clickFourthProductAddToCartButton() {
        await this.fourthProductAddToCartButton.click()
    }
    async clickFifthProductAddToCartButton() {
        await this.fifthProductAddToCartButton.click()
    }
    async clickSixthProductAddToCartButton() {
        await this.sixthProductAddToCartButton.click()
    }

    async clickFirstProductRemoveButton() {
        await this.firstProductRemoveButton.click()
    }
    async clickSecondProductRemoveButton() {
        await this.secondProductRemoveButton.click()
    }
    async clickThirdProductRemoveButton() {
        await this.thirdProductRemoveButton.click()
    }
    async clickFourthProductRemoveButton() {
        await this.fourthProductRemoveButton.click()
    }
    async clickFifthProductRemoveButton() {
        await this.fifthProductRemoveButton.click()
    }
    async clickSixthProductRemoveButton() {
        await this.sixthProductRemoveButton.click()
    }

    async clickBurgerMenuButton() {
        await this.burgerMenuButton.click()
    }
    async clickBurgerMenuCrossButton() {
        await this.burgerMenuCrossButton.click()
    }

    async clickShoppingCartIcon() {
        await this.shoppingCartIcon.click()
    }
    async clickLogout() {
        await this.logout.click()
    }

    //пример команды на визибл через all когда локатор не уникальный

    async expectProductsToBeVisible() {
        for(const product of await this.productsNames.all()) {
            await expect(product).toBeVisible();
        }
    }

}