function cov_zimsgtm3e() {
  var path = "C:\\Users\\brubr\\Documents\\GitHub\\trabalho-integrado-2020-1-grupo-6\\Front-end\\src\\store\\index.js";
  var hash = "42f464b3acb21a194cfd080f4f99fcfc0ebad9c3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\brubr\\Documents\\GitHub\\trabalho-integrado-2020-1-grupo-6\\Front-end\\src\\store\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 4,
          column: 26
        }
      },
      "1": {
        start: {
          line: 5,
          column: 21
        },
        end: {
          line: 5,
          column: 55
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "42f464b3acb21a194cfd080f4f99fcfc0ebad9c3"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_zimsgtm3e = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_zimsgtm3e();
import { createStore } from "redux";
import { reducer, initialState } from "./reducer.js";
cov_zimsgtm3e().s[0]++;
console.log(initialState);
export const store = (cov_zimsgtm3e().s[1]++, createStore(reducer, initialState));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLFNBQVNBLFdBQVQsUUFBNEIsT0FBNUI7QUFDQSxTQUFTQyxPQUFULEVBQWtCQyxZQUFsQixRQUFzQyxjQUF0Qzs7QUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFlBQVo7QUFDQSxPQUFPLE1BQU1HLEtBQUssNEJBQUdMLFdBQVcsQ0FBQ0MsT0FBRCxFQUFVQyxZQUFWLENBQWQsQ0FBWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IHJlZHVjZXIsIGluaXRpYWxTdGF0ZSB9IGZyb20gXCIuL3JlZHVjZXIuanNcIjtcclxuXHJcbmNvbnNvbGUubG9nKGluaXRpYWxTdGF0ZSk7XHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcbiJdfQ==