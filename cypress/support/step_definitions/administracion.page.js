import administracion from "../../fixtures/administracion.json";
import administrarEtiqueta from "../../fixtures/administrarEtiqueta.json";
import pagesData from "../../fixtures/pages.json";
import loginData from "../../fixtures/login.json";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then("The user goes to Administracion page", () => {
  cy.get(pagesData.administracionPage).click();
  cy.get("body").then(($body) => {
    if ($body.find(administracion.alert).length) {
      cy.get(loginData.inputPassword).type(loginData.users.password);
      cy.get(loginData.loginButton).click();
    }
  });
});
Then("If there is more tags, the user delete all", () => {
  const aremore = () => {
    cy.get("body").then((table) => {
      if (table.find(administracion.etiquetasTableName).length) {
        cy.get(administracion.etiquetasTableName).first().click();
        cy.get(administrarEtiqueta.eliminarEtiquetaButton).click();
        cy.get(administrarEtiqueta.eliminarEtiquetaButton).click();
        aremore();
      } else {
        return;
      }
    });
  };
  aremore();
});

Then("The user clicks on the first tag to {string} it", () => {
  cy.get("body").then((table) => {
    if (table.find(administracion.etiquetasTableName).length) {
      cy.get(administracion.etiquetasTableName).first().click();
    } else {
      cy.createtag("test if no tag was created", "test if no tag was created");
      cy.get(administracion.etiquetasTableName).click();
    }
  });
});

Then(
  "The user creates a new tag with name: {}; and description: {}",
  (name, description) => {
    cy.createtag(name, description);
  }
);

Then("The page Administacion shows the following options", () => {
  cy.fixture("administracion.json").then((json) => {
    cy.log(Object.values(json.botonesTabla));
    cy.wrap(Object.values(json.botonesTabla)).each((elemento, index, list) => {
      cy.get(administracion.fullTable).then((tabla) => {
        cy.log(tabla.text().split(/(?=A)/g));
        const cantidad = tabla.text().split(/(?=A)/g);
        expect(tabla.text().split(/(?=A)/g)[0]).to.eq(list[0]);
        for (let i = 0; i < cantidad.length; i++) {
          expect(tabla.text().split(/(?=A)/g)[i]).to.eq(list[i]);
        }
      });
    });
  });
});

Then(
  "The page Administacion shows the following options {string}",
  (options) => {
    cy.get(administracion.fullTable).then((tabla) => {
      const cantidad = tabla.text().split(/(?=A)/g);
      expect(cantidad).to.contain(options);
    });
  }
);
