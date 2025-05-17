describe('Menú Principal Routes', () => {
    beforeEach(() => {
      // Visita la página principal de tu aplicación antes de cada prueba
      cy.visit('http://localhost:8100/menu-ppal');
    });
  
    it('debería navegar a Menú Principal', () => {
      cy.get('ion-item').contains('Menú Principal').click();
      cy.url().should('include', '/menu-ppal');
    });
  
    it('debería navegar a Ingresa los Ingredientes', () => {
      cy.get('ion-item').contains('Ingresa los Ingredientes').click();
      cy.url().should('include', '/agregar');
    });
  
    it('debería navegar a Modifica un ingrediente', () => {
      cy.get('ion-item').contains('Modifica un ingrediente').click();
      cy.url().should('include', '/modificar');
    });
  
    it('debería navegar a Listado de ingredientes', () => {
      cy.get('ion-item').contains('Listado de ingredientes').click();
      cy.url().should('include', '/listar');
    });
  
    it('debería navegar a Convertir Receta', () => {
      cy.get('ion-item').contains('Convertir Receta').click();
      cy.url().should('include', '/convertir');
    });
  
    it('debería navegar a Spoonacular', () => {
      cy.get('ion-item').contains('Spoonacular').click();
      cy.url().should('include', '/spoonacular');
    });
  
    it('debería navegar a Fotografía tus Preparaciones!', () => {
      cy.get('ion-item').contains('Fotografía tus Preparaciones!').click();
      cy.url().should('include', '/camera');
    });
  });