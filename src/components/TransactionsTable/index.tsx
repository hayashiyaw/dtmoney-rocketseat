import { Container } from "./styles";

export function TransactionsTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              Teste 1
            </td>
            <td className="deposit">
              10,00
            </td>
            <td>
              Saídas
            </td>
            <td>
              10/10/2021
            </td>
          </tr>

          <tr>
            <td>
              Teste 1
            </td>
            <td className="deposit">
              10,00
            </td>
            <td>
              Saídas
            </td>
            <td>
              10/10/2021
            </td>
          </tr>

          <tr>
            <td>
              Aluguel
            </td>
            <td className="withdraw">
              -10,00
            </td>
            <td>
              Saídas
            </td>
            <td>
              10/10/2021
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}