describe("Viva Memory App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should show the home page", () => {
    cy.get('[data-test="home-component"]').should("be.visible");
  });

  it("Should win on easy level", () => {
    cy.get(".btn.easy").click();

    for (let i = 0; i < 4; i++) {
      cy.get(`[data-test="card-${i}"]`).click();
    }

    cy.get('[data-test="victory-component"]').should("be.visible");
  });

  it("Should win on medium level", () => {
    cy.get(".btn.medium").click();

    for (let i = 0; i < 8; i++) {
      cy.get(`[data-test="card-${i}"]`).click();
    }

    cy.get('[data-test="victory-component"]').should("be.visible");
  });

  it("Should win on hard level", () => {
    cy.get(".btn.hard").click();

    for (let i = 0; i < 16; i++) {
      cy.get(`[data-test="card-${i}"]`).click();
    }

    cy.get('[data-test="victory-component"]').should("be.visible");
  });

  it("Should return to home page after pressing replay", () => {
    cy.get(".btn.easy").click();

    for (let i = 0; i < 4; i++) {
      cy.get(`[data-test="card-${i}"]`).click();
    }

    cy.get('[data-test="victory-component"]').within(() => {
      cy.get("button").click();
    });
    cy.get('[data-test="home-component"]').should("be.visible");
  });
});
