import * as SQLite from "expo-sqlite";
import universitiesReducer from "../store/reducers/universities";

const db = SQLite.openDatabase("favorites4.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        // "CREATE TABLE IF NOT EXISTS favorites (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, department TEXT NOT NULL, score TEXT NOT NULL, placement TEXT NOT NULL, isState INTEGER NOT NULL, city TEXT NOT NULL, universityYear INTEGER NOT NULL);",
        "CREATE TABLE IF NOT EXISTS favorites4 (id INTEGER PRIMARY KEY NOT NULL, uniId INTEGER NOT NULL, UNIQUE(uniId));",
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
        "SELECT * FROM favorites4;",
        [],
        (_, result) => {
          if (
            result.rows._array.findIndex((elm) => elm.uniId === uniId) === -1
          ) {
            // uniId favorilerde var
            db.transaction((tx) => {
              tx.executeSql(
                "INSERT INTO favorites4 (uniId) VALUES (?);",
                [uniId],
                (_, result) => {
                  console.log("eklendi1:");
                  resolve(result);
                },
                (_, err) => {
                  console.log("eklenemedi1:");
                  reject(err);
                }
              );
            });
          } else {
            // uniId favorilerde yok
            db.transaction((tx) => {
              tx.executeSql(
                `DELETE FROM favorites4 WHERE uniId = "${uniId}"`,
                [],
                (_, result) => {
                  console.log("silindi2:");
                  resolve(result);
                },
                (_, err) => {
                  console.log("silinemedi2:");
                  reject(err);
                }
              );
            });
          }
        },
        (_, err) => {
          console.log("hata1:");
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
        "SELECT * FROM favorites4;",
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
