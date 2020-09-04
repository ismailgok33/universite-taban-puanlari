import * as SQLite from "expo-sqlite";
import universitiesReducer from "../store/reducers/universities";

const db = SQLite.openDatabase("favorites3.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        // "CREATE TABLE IF NOT EXISTS favorites (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, department TEXT NOT NULL, score TEXT NOT NULL, placement TEXT NOT NULL, isState INTEGER NOT NULL, city TEXT NOT NULL, universityYear INTEGER NOT NULL);",
        "CREATE TABLE IF NOT EXISTS favorites3 (id INTEGER PRIMARY KEY NOT NULL, uniId INTEGER NOT NULL, UNIQUE(uniId));",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertFavorite = (uniId) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO favoritess (uniId) VALUES (?);",
        [uniId],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const fetchFavorite = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM favoritess;",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
