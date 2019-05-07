# Validador de Cadastro de Pessoa Física (CPF)  v.1.0.0

**A biblioteca tem como finalidade validar os dígitos verificadores do CPF (usando o algoritmo conhecido como "módulo 11")**. Na versão inicial retorna true ou false como resultado da validação.

A biblioteca poderá ser testada através da função cpfValidator()

# Como instalar
$  npm install lib-cpf-validator-bgp

# Como utilizar

```js
> const cardValidator = require("lib-valid-credit-card");
> console.log(cardValidator(6062822004739263))
> // returns "true"
```