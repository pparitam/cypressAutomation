class RefundOrder {

  refundCustomerORder (brandName: string) {

    cy.get('#showActivities___BV_modal_content_ select', { log: false }).select('Boohoo Group', { log: false });
    cy.get('[dusk="activity-3-select"]', { log: false }).click({ log: false });
    cy.get('#showActivities___BV_modal_content_', { log: false }).should('not.exist');
    cy.readFile(`cypress/artefacts/orderCreation/${brandName}/adyen-OrderRefund.json`).then(data => {
      cy.log(data.orderNumber);
      cy.wait(120000);
      cy.get('input[dusk="sidebar-search-input"]', { log: true }).type(data.orderNumber + '{enter}', { log: false });
    });
    cy.get('[class="row kt-widget4__item"]:eq(1)').click();
    cy.get('[dusk="confirm-button"]').click();
    cy.wait(2000);
    cy.get("[class='swal2-confirm swal2-styled']").click({ force: true });
    cy.get('[dusk="refund-success-alert"]', { timeout: 30000 }).should('contain', 'Order successfully refunded.');

  }
}

export default new RefundOrder();