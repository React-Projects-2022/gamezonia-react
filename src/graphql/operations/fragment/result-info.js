import { gql } from "@apollo/client";

export const RESULT_INFO_FRAGMENT = gql`
  fragment ResultInfoObject on ResultInfo {
    page
    pages
    total
    itemsPage
  }
`;
