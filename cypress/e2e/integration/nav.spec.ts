describe('Navigation Tests', () => {
    it('should navigate to the about page', () => {
        cy.visit('http://localhost:8100'); // Asegurarse de que el servidor está ejecutándose en este equipo

        cy.get('ion-button').contains('Iniciar Sesión').click();
        cy.get('ion-button').contains('Registrarse').click();
        cy.contains('Inicio de Sesión').should('be.visible');
    });
});