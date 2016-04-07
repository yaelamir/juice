(function() {
  "use strict";

  angular
    .module("app")
    .factory("orderService", orderService);

  orderService.$inject = ["$log"];

  function orderService($log) {
    $log.debug("order service loaded");

      // return {
      //   juiceSize: [
      //     { size: "12 oz",
      //       price: "$6"
      //     },
      //     { size: "16 oz",
      //       price: "$8"
      //     },
      //     { size: "20 oz",
      //       price: "$12"
      //     },
      //     { size: "32 oz",
      //       price: "$18"
      //     }
      //   ]
      // };

    var nutrientUnit = {
      "energy":    "cals",
      "fat":       "g",
      "carbs":     "g",
      "sugar":     "g",
      "protein":   "g",
      "potassium": "mg",
      "calcium":   "mg",
      "iron":      "mg",
      "fiber":     "g",
      "zinc":      "g",
      "vitamin a": "mg",
      "vitamin b": "mg",
      "vitamin c": "mg",
      "vitamin d": "mg",
      "vitamin e": "mg",
      "vitamin k": "mcg"
    };
// const masterKey = ["Energy", "Fat", "Carbs"]
// ingredients.nutrients[masterKey.indexOf("Carbs")]
    return {
      ingredients: [
        { name: "apple",
          type: "fruit",
          nutrients: [
           { "Energy":      95 },
           { "Fat":        0.3 },
           { "Carbs":       25 },
           { "Sugar":       19 },
           { "Protein":    0.5 },
           { "Potassium":  195 },
           { "Calcium":     11 },
           { "Iron":       0.2 },
           { "Fiber":      4.4 },
           { "Zinc":      0.04 },
           { "Vitamin A": 0.03 },
           { "Vitamin B": 0.05 },
           { "Vitamin C":  8.4 },
           { "Vitamin D":    0 },
           { "Vitamin E": 0.33 },
           { "Vitamin K":    4 }
          ]
        },
        { name: "pear",
          type: "fruit",
          nutrients: [
           { "Energy":     102 },
           { "Fat":        0.2 },
           { "Carbs":       27 },
           { "Sugar":       17 },
           { "Protein":    0.6 },
           { "Potassium":  212 },
           { "Calcium":     16 },
           { "Iron":       0.3 },
           { "Fiber":        6 },
           { "Zinc":      0.18 },
           { "Vitamin A": 0.01 },
           { "Vitamin B": 0.07 },
           { "Vitamin C":  7.5 },
           { "Vitamin D":    0 },
           { "Vitamin E": 0.21 },
           { "Vitamin K":    8 }
          ]
        },
        { name: "guava",
          type: "fruit",
          nutrients: [
           { "Energy":       38 },
           { "Fat":         0.5 },
           { "Carbs":         8 },
           { "Sugar":       4.9 },
           { "Protein":     1.4 },
           { "Potassium":   688 },
           { "Calcium":      30 },
           { "Iron":       0.43 },
           { "Fiber":         3 },
           { "Zinc":       0.38 },
           { "Vitamin A":  0.31 },
           { "Vitamin B":   0.3 },
           { "Vitamin C": 376.7 },
           { "Vitamin D":     0 },
           { "Vitamin E":   1.2 },
           { "Vitamin K":   4.3 }
          ]
        },
        { name: "papaya",
          type: "fruit",
          nutrients: [
           { "Energy":      67 },
           { "Fat":        0.4 },
           { "Carbs":       17 },
           { "Sugar":       12 },
           { "Protein":    0.7 },
           { "Potassium":  360 },
           { "Calcium":     34 },
           { "Iron":      0.14 },
           { "Fiber":      2.5 },
           { "Zinc":       0.1 },
           { "Vitamin A": 0.46 },
           { "Vitamin B": 0.05 },
           { "Vitamin C":  8.4 },
           { "Vitamin D":    0 },
           { "Vitamin E":  1.2 },
           { "Vitamin K":  3.6 }
          ]
        },
        { name: "orange",
          type: "fruit",
          nutrients: [
            { "Energy":      45 },
            { "Fat":        0.1 },
            { "Carbs":       11 },
            { "Sugar":        9 },
            { "Protein":    0.9 },
            { "Potassium":  174 },
            { "Calcium":     52 },
            { "Iron":      0.13 },
            { "Fiber":      3.1 },
            { "Zinc":      0.09 },
            { "Vitamin A": 0.09 },
            { "Vitamin B": 0.25 },
            { "Vitamin C": 69.7 },
            { "Vitamin D":  0.4 },
            { "Vitamin E": 0.24 },
            { "Vitamin K":    0 }
          ]
        },
        { name: "grapefruit",
          type: "fruit",
          nutrients: [
            { "Energy":       74 },
            { "Fat":         0.3 },
            { "Carbs":        25 },
            { "Sugar":        19 },
            { "Protein":     0.5 },
            { "Potassium":   320 },
            { "Calcium":      28 },
            { "Iron":       0.21 },
            { "Fiber":       2.5 },
            { "Zinc":       0.16 },
            { "Vitamin A":  0.03 },
            { "Vitamin B": 0.226 },
            { "Vitamin C":  79.1 },
            { "Vitamin D":     0 },
            { "Vitamin E":   0.3 },
            { "Vitamin K":     0 }
          ]
        },
        { name: "lemon",
          type: "fruit",
          nutrients: [
            { "Energy":      24 },
            { "Fat":        0.2 },
            { "Carbs":        5 },
            { "Sugar":      1.5 },
            { "Protein":   0.92 },
            { "Potassium":  116 },
            { "Calcium":     22 },
            { "Iron":       0.5 },
            { "Fiber":      2.4 },
            { "Zinc":      0.05 },
            { "Vitamin A": 0.01 },
            { "Vitamin B": 0.12 },
            { "Vitamin C": 44.5 },
            { "Vitamin D":    0 },
            { "Vitamin E": 0.13 },
            { "Vitamin K":    0 }
          ]
        },
        { name: "kale",
          type: "vegetable",
          nutrients: [
           { "Energy":      33 },
           { "Fat":        0.6 },
           { "Carbs":        6 },
           { "Sugar":        0 },
           { "Protein":      2 },
           { "Potassium":  299 },
           { "Calcium":   90.5 },
           { "Iron":       1.1 },
           { "Fiber":      1.3 },
           { "Zinc":       0.3 },
           { "Vitamin A":  3.1 },
           { "Vitamin B":  0.2 },
           { "Vitamin C": 80.4 },
           { "Vitamin D":    0 },
           { "Vitamin E":    0 },
           { "Vitamin K":  547 }
          ]
        },
        { name: "spinach",
          type: "vegetable",
          nutrients: [
           { "Energy":       7 },
           { "Fat":          0 },
           { "Carbs":        1 },
           { "Sugar":        0 },
           { "Protein":      1 },
           { "Potassium":  167 },
           { "Calcium":   29.7 },
           { "Iron":       0.8 },
           { "Fiber":      0.7 },
           { "Zinc":       0.2 },
           { "Vitamin A": 0.84 },
           { "Vitamin B":    0 },
           { "Vitamin C":  8.4 },
           { "Vitamin D":    0 },
           { "Vitamin E":  0.6 },
           { "Vitamin K":  145 }
          ]
        },
        { name: "cucumber",
          type: "vegetable",
          nutrients: [
           { "Energy":       45 },
           { "Fat":         0.3 },
           { "Carbs":      10.9 },
           { "Sugar":         5 },
           { "Protein":       2 },
           { "Potassium":   442 },
           { "Calcium":    48.2 },
           { "Iron":        0.8 },
           { "Fiber":       1.5 },
           { "Zinc":        0.6 },
           { "Vitamin A":  0.31 },
           { "Vitamin B":   0.9 },
           { "Vitamin C":   8.4 },
           { "Vitamin D":     0 },
           { "Vitamin E":   0.1 },
           { "Vitamin K":  49.4 }
          ]
        },
        { name: "carrot",
          type: "vegetable",
          nutrients: [
           { "Energy":      30 },
           { "Fat":        0.2 },
           { "Carbs":      6.9 },
           { "Sugar":      3.4 },
           { "Protein":    0.7 },
           { "Potassium": 49.7 },
           { "Calcium":     34 },
           { "Iron":       0.2 },
           { "Fiber":        2 },
           { "Zinc":       0.2 },
           { "Vitamin A":  3.6 },
           { "Vitamin B":  0.1 },
           { "Vitamin C":  4.2 },
           { "Vitamin D":    0 },
           { "Vitamin E":  0.5 },
           { "Vitamin K":  9.5 }
          ]
        },
        { name: "celery",
          type: "vegetable",
          nutrients: [
            { "Energy":       3 },
            { "Fat":          0 },
            { "Carbs":      0.6 },
            { "Sugar":      0.3 },
            { "Protein":    0.1 },
            { "Potassium": 44.2 },
            { "Calcium":    6.8 },
            { "Iron":         0 },
            { "Fiber":      0.3 },
            { "Zinc":         0 },
            { "Vitamin A": 0.02 },
            { "Vitamin B":  0.5 },
            { "Vitamin C":  0.5 },
            { "Vitamin D":    0 },
            { "Vitamin E":    0 },
            { "Vitamin K":    5 }
          ]
        },
        { name: "beets",
          type: "vegetable",
          nutrients: [
            { "Energy":       35 },
            { "Fat":         0.1 },
            { "Carbs":        25 },
            { "Sugar":       5.5 },
            { "Protein":     1.3 },
            { "Potassium":   267 },
            { "Calcium":    13.1 },
            { "Iron":        0.7 },
            { "Fiber":       2.3 },
            { "Zinc":        0.3 },
            { "Vitamin A":     0 },
            { "Vitamin B":     0 },
            { "Vitamin C":     4 },
            { "Vitamin D":     0 },
            { "Vitamin E":     0 },
            { "Vitamin K":   0.2 }
          ]
        },
        { name: "honey",
          type: "sweet",
          nutrients: [
            { "Energy":       64 },
            { "Fat":           0 },
            { "Carbs":        17 },
            { "Sugar":        17 },
            { "Protein":     0.1 },
            { "Potassium":    11 },
            { "Calcium":     1.3 },
            { "Iron":        0.1 },
            { "Fiber":         0 },
            { "Zinc":          0 },
            { "Vitamin A":     0 },
            { "Vitamin B":     0 },
            { "Vitamin C":   0.1 },
            { "Vitamin D":     0 },
            { "Vitamin E":     0 },
            { "Vitamin K":     0 }
          ]
        },
        { name: "agave",
          type: "sweet",
          nutrients: [
            { "Energy":       19 },
            { "Fat":           0 },
            { "Carbs":         5 },
            { "Sugar":         1 },
            { "Protein":       0 },
            { "Potassium":  35.6 },
            { "Calcium":     117 },
            { "Iron":        0.5 },
            { "Fiber":       1.8 },
            { "Zinc":          0 },
            { "Vitamin A":     0 },
            { "Vitamin B":     0 },
            { "Vitamin C":   1.1 },
            { "Vitamin D":     0 },
            { "Vitamin E":   0.1 },
            { "Vitamin K":   1.5 }
          ]
        },
        { name: "cinnamon",
          type: "sweet",
          nutrients: [
            { "Energy":       19 },
            { "Fat":           0 },
            { "Carbs":         6 },
            { "Sugar":         0 },
            { "Protein":       0 },
            { "Potassium":  33.4 },
            { "Calcium":    77.7 },
            { "Iron":        0.6 },
            { "Fiber":       4.1 },
            { "Zinc":        0.1 },
            { "Vitamin A":     0 },
            { "Vitamin B":     0 },
            { "Vitamin C":   0.3 },
            { "Vitamin D":     0 },
            { "Vitamin E":   0.2 },
            { "Vitamin K":   2.4 }
          ]
        },
        { name: "maple syrup",
          type: "sweet",
          nutrients: [
            { "Energy":       52 },
            { "Fat":           0 },
            { "Carbs":      13.4 },
            { "Sugar":      11.9 },
            { "Protein":       0 },
            { "Potassium":  40.8 },
            { "Calcium":    13.4 },
            { "Iron":        0.2 },
            { "Fiber":         0 },
            { "Zinc":        0.8 },
            { "Vitamin A":     0 },
            { "Vitamin B":     0 },
            { "Vitamin C":     0 },
            { "Vitamin D":     0 },
            { "Vitamin E":     0 },
            { "Vitamin K":     0 }
          ]
        },
        { name: "cayenne",
          type: "extras",
          nutrients: [
            { "Energy":     16.7 },
            { "Fat":         0.9 },
            { "Carbs":         3 },
            { "Sugar":       0.5 },
            { "Protein":     0.6 },
            { "Potassium":   106 },
            { "Calcium":     7.8 },
            { "Iron":        0.4 },
            { "Fiber":       1.4 },
            { "Zinc":        0.1 },
            { "Vitamin A":   0.7 },
            { "Vitamin B":     0 },
            { "Vitamin C":     4 },
            { "Vitamin D":     0 },
            { "Vitamin E":   1.6 },
            { "Vitamin K":   4.2 }
          ]
        },
        { name: "tumeric",
          type: "extras",
          nutrients: [
            { "Energy":       24 },
            { "Fat":         0.7 },
            { "Carbs":       4.4 },
            { "Sugar":       0.2 },
            { "Protein":     0.5 },
            { "Potassium":   170 },
            { "Calcium":    12.4 },
            { "Iron":        2.8 },
            { "Fiber":       1.4 },
            { "Zinc":        0.3 },
            { "Vitamin A":     0 },
            { "Vitamin B":   0.1 },
            { "Vitamin C":   1.7 },
            { "Vitamin D":     0 },
            { "Vitamin E":   0.2 },
            { "Vitamin K":   0.9 }
          ]
        },
        { name: "garlic",
          type: "extras",
          nutrients: [
            { "Energy":       13 },
            { "Fat":           0 },
            { "Carbs":         3 },
            { "Sugar":       0.1 },
            { "Protein":     0.6 },
            { "Potassium":  36.1 },
            { "Calcium":    16.3 },
            { "Iron":        0.2 },
            { "Fiber":       0.2 },
            { "Zinc":        0.1 },
            { "Vitamin A":     0 },
            { "Vitamin B":   0.1 },
            { "Vitamin C":   2.8 },
            { "Vitamin D":     0 },
            { "Vitamin E":     0 },
            { "Vitamin K":   0.2 }
          ]
        },
        { name: "ginger",
          type: "extras",
          nutrients: [
            { "Energy":        9 },
            { "Fat":         0.1 },
            { "Carbs":         2 },
            { "Sugar":       0.2 },
            { "Protein":     0.2 },
            { "Potassium":  45.7 },
            { "Calcium":     1.8 },
            { "Iron":        0.1 },
            { "Fiber":       0.2 },
            { "Zinc":          0 },
            { "Vitamin A":     0 },
            { "Vitamin B":     0 },
            { "Vitamin C":   0.6 },
            { "Vitamin D":     0 },
            { "Vitamin E":     0 },
            { "Vitamin K":     0 }
          ]
        },
        { name: "chia seeds",
          type: "extras",
          nutrients: [
            { "Energy":      137 },
            { "Fat":           0 },
            { "Carbs":      12.3 },
            { "Sugar":         0 },
            { "Protein":     4.4 },
            { "Potassium":  44.8 },
            { "Calcium":     177 },
            { "Iron":          0 },
            { "Fiber":      10.6 },
            { "Zinc":          1 },
            { "Vitamin A":     0 },
            { "Vitamin B":     0 },
            { "Vitamin C":     0 },
            { "Vitamin D":     0 },
            { "Vitamin E":     0 },
            { "Vitamin K":     0 }
          ]
        },
        { name: "flax seeds",
          type: "extras",
          nutrients: [
            { "Energy":       55 },
            { "Fat":         4.3 },
            { "Carbs":         3 },
            { "Sugar":       0.2 },
            { "Protein":     1.9 },
            { "Potassium":  83.3 },
            { "Calcium":    26.1 },
            { "Iron":        0.6 },
            { "Fiber":       2.8 },
            { "Zinc":        0.4 },
            { "Vitamin A":     0 },
            { "Vitamin B":     0 },
            { "Vitamin C":   0.1 },
            { "Vitamin D":     0 },
            { "Vitamin E":     0 },
            { "Vitamin K":   0.4 }
          ]
        }
      ],
      juices: [
        { type: "small",
          size: "12 oz",
          price: "$6"
        },
        { type: "medium",
          size: "16 oz",
          price: "$8"
        },
        { type: "large",
          size: "20 oz",
          price: "$12"
        },
        { type: "extra large",
          size: "32 oz",
          price: "$18"
        }
      ]
    }
  };
})();




