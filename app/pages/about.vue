<template>
  <p>There are {{ data}} invoices.</p>
</template>

<script lang="ts" setup>
const query = gql`
 query getInvoice($id: ID!) {
  invoice(id: $id) {
    id
    invoiceNumber
    type
    createdAt
  }
}
`

const { data } = await useAsyncQuery(query, { id: "/api/invoices/fe3efad8-5ca3-44cd-bc68-7afb2dd3bc48" })
</script>
