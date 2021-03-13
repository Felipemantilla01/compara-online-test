# Rules

## Low Coverage

El precio decrece junto con la fecha de venta, cuando la fecha de venta es menor a 0 el precio decae a 0 tambien y se mantiene asi

| day | sellIn | price | comment                                      | TestCase |
| --- | ------ | ----- | -------------------------------------------- | -------- |
| 0   | 5      | 7     | Se debe vender en 5 dias y su precio es de 7 | No       |
| 1   | 4      | 6     | El precio decae en 1 cada dia                | No       |
| 2   | 3      | 5     |                                              | Yes      |
| 3   | 2      | 4     |                                              | No       |
| 4   | 1      | 3     |                                              | No       |
| 5   | 0      | 2     |                                              | Yes      |
| 6   | -1     | 0     | Al vencerse la fecha, su precio es 0         | No       |
| 7   | -2     | 0     |                                              | No       |
| 8   | -3     | 0     |                                              | Yes      |

## Medium Coverage

| day | sellIn | price | comment | TestCase |
| --- | ------ | ----- | ------- | -------- |
| 0   | 10     | 20    |         | No       |
| 1   | 9      | 19    |         | No       |
| .   | .      | .     | .       | .        |
| .   | .      | .     | .       | .        |
| .   | .      | .     | .       | .        |
| 2   | 3      | 5     |         | Yes      |
| 3   | 2      | 4     |         | No       |
| 4   | 1      | 3     |         | No       |
| 5   | 0      | 2     |         | Yes      |
| 6   | -1     | 0     |         | No       |
| 7   | -2     | 0     |         | No       |
| 8   | -3     | 0     |         | Yes      |

## Full Coverage

Incrementa su precio a medida que disminuye el tiempo, cuando el tiempo es negativo su valor incrementa en 2 veces, y al llegar a 50 no crece mas.

| day | sellIn | price | comment                                        | TestCase |
| --- | ------ | ----- | ---------------------------------------------- | -------- |
| 0   | 2      | 0     | se debe vender en dos dias y su precio es de 0 | No       |
| 1   | 1      | 1     | el tiempo disminuye y su precio aumenta en 1   | Yes      |
| 2   | 0      | 2     | el tiempo disminuye y su precio aumenta en 1   | No       |
| 3   | -1     | 4     | el tiempo es < 0 ahora aumenta de a 2          | No       |
| 4   | -2     | 6     | el tiempo es < 0 ahora aumenta de a 2          | Yes      |
| .   | .      | .     | .                                              | .        |
| .   | .      | .     | .                                              | .        |
| .   | .      | .     | .                                              | .        |
| 25  | -23    | 48    | el tiempo es < 0 ahora aumenta de a 2          | No       |
| 26  | -24    | 50    | el tiempo es < 0 ahora aumenta de a 2          | No       |
| 27  | -25    | 50    | el precio es de 50 y no puede aumentar mas     | Yes      |

## Mega Coverage

## Special Full Coverage

## Super Sale
