# Validador de Cadastro de Pessoa Física (CPF)  v.1.0.1

**A biblioteca tem como finalidade validar os dígitos verificadores do CPF (usando o algoritmo conhecido como "módulo 11")**. Na versão inicial retorna `true` ou `false` como resultado da validação.

A biblioteca poderá ser testada através da função cpfValidator()

# Como instalar
$  npm install lib-cpf-validator-bgp

# Como utilizar

```js
> const cpfValidator = require("lib-cpf-validator-bgp");
> console.log(cpfValidator(70798791080))
> // returns "true"
```