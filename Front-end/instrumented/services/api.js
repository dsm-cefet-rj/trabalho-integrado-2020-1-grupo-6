function cov_x4x5tovqc() {
  var path = "C:\\Users\\brubr\\Documents\\GitHub\\trabalho-integrado-2020-1-grupo-6\\Front-end\\src\\services\\api.js";
  var hash = "9ae4751d688b3f9fbcd9edd0198bac67db9e6668";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\brubr\\Documents\\GitHub\\trabalho-integrado-2020-1-grupo-6\\Front-end\\src\\services\\api.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 19
        },
        end: {
          line: 5,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9ae4751d688b3f9fbcd9edd0198bac67db9e6668"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_x4x5tovqc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_x4x5tovqc();
import axios from "axios";
export const api = (cov_x4x5tovqc().s[0]++, axios.create({
  baseURL: "http://localhost:5000"
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUVBLE9BQU8sTUFBTUMsR0FBRyw0QkFBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWE7QUFDOUJDLEVBQUFBLE9BQU8sRUFBRTtBQURxQixDQUFiLENBQUgsQ0FBVCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIsXHJcbn0pO1xyXG4iXX0=