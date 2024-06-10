import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class SqliteService {
  sqlite: SQLiteConnection;
  db: SQLiteDBConnection | null = null; // Inicializamos db como null

  constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
  }

  async initializeDatabase() {
    try {
      // Parámetros requeridos por createConnection
      const databaseName = 'mydatabase';
      const encrypted = false;
      const mode = 'no-encryption';
      const version = 1;
      const readonly = false;

      // Crear la conexión con todos los parámetros
      this.db = await this.sqlite.createConnection(databaseName, encrypted, mode, version, readonly);
      await this.db.open();

      // Crear una tabla de ejemplo
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS usuarios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL,
          apellido TEXT NOT NULL
        );
      `;
      await this.db.execute(createTableQuery);
    } catch (e) {
      console.error('Error initializing database', e);
    }
  }
}



