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

El precio disminuye en 1, si la fecha de venta es menor a 0 disminuye en 2 el precio, y finalmente si el precio llega a 0 se mantiene en 0

| day | sellIn | price | comment                                     | TestCase |
| --- | ------ | ----- | ------------------------------------------- | -------- |
| 0   | 10     | 20    | El precio disminuye en 1 por dia            | No       |
| 1   | 9      | 19    |                                             | No       |
| .   | .      | .     | .                                           | .        |
| .   | .      | .     | .                                           | .        |
| .   | .      | .     | .                                           | .        |
| 9   | 1      | 11    |                                             | Yes      |
| 10  | 0      | 10    |                                             | No       |
| 11  | -1     | 8     | Si la fecha es < 0 el precio disminuye en 2 | Yes      |
| .   | .      | .     | .                                           | .        |
| .   | .      | .     | .                                           | .        |
| .   | .      | .     | .                                           | .        |
| 14  | -4     | 2     |                                             | No       |
| 15  | -5     | 0     | Al llegar a cero el precio se mantiene en 0 | No       |
| 16  | -6     | 0     |                                             | Yes      |

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

Es un producto legendario asi que nunca debe ser vendido y nunca decrece el precio, ademas su precio es siempre de 80

## Special Full Coverage

El precio aumenta en 1 mentras que disminuye el tiempo,
Si la fecha de venta es menor a 10 el precio aumenta en 2
Si la fecha de venta es menor a 5 el precio aumenta en 3
Si el precio llega a 50 se mantiene ahi y
cuando el tiempo es menor a 0 el precio decae a 0.

| day | sellIn | price | comment | TestCase |
| --- | ------ | ----- | ------- | -------- |
| 0   | 11     | 30    |         | No       |
| 1   | 10     | 31    |         | Yes      |
| 2   | 9      | 33    |         | No       |
| 3   | 8      | 35    |         | Yes      |
| 4   | 7      | 37    |         | No       |
| 5   | 6      | 39    |         | No       |
| 6   | 5      | 41    |         | No       |
| 7   | 4      | 44    |         | No       |
| 8   | 3      | 47    |         | Yes      |
| 9   | 2      | 50    |         | No       |
| 10  | 1      | 50    |         | No       |
| 11  | 0      | 50    |         | Yes      |
| 12  | -1     | 0     |         | Yes      |

## Super Sale

El precio decrece el doble de rapido que los productos normales

| day | sellIn | price | comment | TestCase |
| --- | ------ | ----- | ------- | -------- |
| 0   | 6      | 30    |         | No       |
| 1   | 5      | 28    |         | No       |
| 2   | 4      | 26    |         | No       |
| 3   | 3      | 24    |         | Yes      |
| 4   | 2      | 22    |         | No       |
| 5   | 1      | 20    |         | No       |
| 6   | 0      | 18    |         | No       |
| 7   | -1     | 14    |         | No       |
| 8   | -2     | 10    |         | Yes      |
| .   | .      | .     | .       | .        |
| .   | .      | .     | .       | .        |
| 11  |        | 0     |         | Yes      |
