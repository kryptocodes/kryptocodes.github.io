import { Client } from "@notionhq/client";

const notion = new Client({
  auth: 'secret_P2N72GcsxSxCDqcJOpa0PequaP3oaK7NmkNgRxgtRH'
});

export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  return response.results;
};