import { gql } from "@apollo/client"
import { GraphQLScalarType, Kind } from "graphql"

//<----------------------ApolloClient-------------------------------->//

export const GET_PRODUCTS = gql`
  {
    products(first: 10, page: 2603) {
      data {
        id
        is_active
        product_translations {
          product_name
        }
        product_photos {
          is_4_listing
        }
      }
      paginatorInfo {
        currentPage
        lastPage
      }
    }
  }
`
export const GET_SELECT = gql`
  {
    currencies {
      id
      code
    }
    packaging_types {
      id
      translation {
        id
        name
      }
    }
    units {
      id
      translation {
        id
        name
      }
    }
    capacity_frequencies {
      id
      translation {
        id
        name
      }
    }
  }
`

//<------------------------------------------------------------------>//
export const ADD_PRODUCT = gql`
  mutation createProduct($objectProduct: CreateProductInput!) {
    createProduct(input: $objectProduct) {
      id
      is_active
      product_translations {
        product_name
      }
      product_photos {
        is_4_listing
      }
    }
  }
`

export const GET_CATEGORIES = gql`
  {
    categories(first: 10, page: 1) {
      data {
        id
        category_translations {
          language_code
          category_name
        }
        sub_categories {
          id
          category_translations {
            language_code
            category_name
          }
        }
      }
      paginatorInfo {
        currentPage
        lastPage
      }
    }
  }
`
