function cov_2ael0e87sr() {
  var path = "C:\\Users\\brubr\\Documents\\GitHub\\trabalho-integrado-2020-1-grupo-6\\Front-end\\src\\store\\reducer.js";
  var hash = "fab2f325957aa823eaf4ad8d9727f4196798e843";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\brubr\\Documents\\GitHub\\trabalho-integrado-2020-1-grupo-6\\Front-end\\src\\store\\reducer.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 28
        },
        end: {
          line: 4,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 30,
          column: 3
        }
      },
      "2": {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 9,
          column: 70
        }
      },
      "3": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 13,
          column: 8
        }
      },
      "4": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 12
        }
      },
      "5": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 19,
          column: 8
        }
      },
      "6": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 12
        }
      },
      "7": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 25,
          column: 8
        }
      },
      "8": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 12
        }
      },
      "9": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 29,
          column: 12
        }
      }
    },
    fnMap: {
      "0": {
        name: "reducer",
        decl: {
          start: {
            line: 6,
            column: 16
          },
          end: {
            line: 6,
            column: 23
          }
        },
        loc: {
          start: {
            line: 6,
            column: 54
          },
          end: {
            line: 31,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 44
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 6,
            column: 32
          },
          end: {
            line: 6,
            column: 44
          }
        }],
        line: 6
      },
      "1": {
        loc: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 14,
            column: 12
          }
        }, {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 20,
            column: 12
          }
        }, {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 26,
            column: 12
          }
        }, {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 29,
            column: 12
          }
        }],
        line: 7
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fab2f325957aa823eaf4ad8d9727f4196798e843"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ael0e87sr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2ael0e87sr();
export const initialState = (cov_2ael0e87sr().s[0]++, {
  usuario: JSON.parse(localStorage.getItem("USUARIO")),
  disciplina: null
});
export function reducer(state = (cov_2ael0e87sr().b[0][0]++, initialState), action) {
  cov_2ael0e87sr().f[0]++;
  cov_2ael0e87sr().s[1]++;

  switch (action.type) {
    case "fazerLogin":
      cov_2ael0e87sr().b[1][0]++;
      cov_2ael0e87sr().s[2]++;
      localStorage.setItem("USUARIO", JSON.stringify(action.payload));
      cov_2ael0e87sr().s[3]++;
      return { ...state,
        usuario: action.payload
      };
      cov_2ael0e87sr().s[4]++;
      break;

    case "criarAtividade":
      cov_2ael0e87sr().b[1][1]++;
      cov_2ael0e87sr().s[5]++;
      return { ...state,
        disciplina: action.payload
      };
      cov_2ael0e87sr().s[6]++;
      break;

    case "atualizarUsuario":
      cov_2ael0e87sr().b[1][2]++;
      cov_2ael0e87sr().s[7]++;
      return { ...state,
        usuario: action.payload
      };
      cov_2ael0e87sr().s[8]++;
      break;

    default:
      cov_2ael0e87sr().b[1][3]++;
      cov_2ael0e87sr().s[9]++;
      break;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXN1YXJpbyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaXNjaXBsaW5hIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPLE1BQU1BLFlBQVksNkJBQUc7QUFDMUJDLEVBQUFBLE9BQU8sRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixDQUFYLENBRGlCO0FBRTFCQyxFQUFBQSxVQUFVLEVBQUU7QUFGYyxDQUFILENBQWxCO0FBS1AsT0FBTyxTQUFTQyxPQUFULENBQWlCQyxLQUFLLGdDQUFHUixZQUFILENBQXRCLEVBQXVDUyxNQUF2QyxFQUErQztBQUFBO0FBQUE7O0FBQ3BELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssWUFBTDtBQUFBO0FBQUE7QUFDRU4sTUFBQUEsWUFBWSxDQUFDTyxPQUFiLENBQXFCLFNBQXJCLEVBQWdDVCxJQUFJLENBQUNVLFNBQUwsQ0FBZUgsTUFBTSxDQUFDSSxPQUF0QixDQUFoQztBQURGO0FBRUUsYUFBTyxFQUNMLEdBQUdMLEtBREU7QUFFTFAsUUFBQUEsT0FBTyxFQUFFUSxNQUFNLENBQUNJO0FBRlgsT0FBUDtBQUZGO0FBTUU7O0FBQ0YsU0FBSyxnQkFBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQ0wsR0FBR0wsS0FERTtBQUVMRixRQUFBQSxVQUFVLEVBQUVHLE1BQU0sQ0FBQ0k7QUFGZCxPQUFQO0FBREY7QUFLRTs7QUFDRixTQUFLLGtCQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFDTCxHQUFHTCxLQURFO0FBRUxQLFFBQUFBLE9BQU8sRUFBRVEsTUFBTSxDQUFDSTtBQUZYLE9BQVA7QUFERjtBQUtFOztBQUVGO0FBQUE7QUFBQTtBQUNFO0FBdEJKO0FBd0JEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c3VhcmlvOiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVVNVQVJJT1wiKSksXHJcbiAgZGlzY2lwbGluYTogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiZmF6ZXJMb2dpblwiOlxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlVTVUFSSU9cIiwgSlNPTi5zdHJpbmdpZnkoYWN0aW9uLnBheWxvYWQpKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c3VhcmlvOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiY3JpYXJBdGl2aWRhZGVcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkaXNjaXBsaW5hOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiYXR1YWxpemFyVXN1YXJpb1wiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzdWFyaW86IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn1cclxuIl19