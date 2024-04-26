from langchain_openai import OpenAIEmbeddings
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import CharacterTextSplitter
from langchain_pinecone import PineconeVectorStore
import os

os.environ['PINECONE_API_KEY'] = 'b5eb531b-3d10-482c-9f76-2e636aeb89bb'
## extract disease text from pdf file
def ExtractpdfData():
   loader = PyPDFLoader("pdfdata/drugs_and_cure.pdf")
   text_splitter = CharacterTextSplitter(
    separator="\n\n",
    chunk_size=1000,
    chunk_overlap=200,
    length_function=len,
    is_separator_regex=False,
)
   doc = text_splitter.split_documents(loader.load())
   embeddings = OpenAIEmbeddings(openai_api_key='')
   vectostore = PineconeVectorStore.from_documents(doc, embeddings, index_name='linksarticles')
   return 


    
   
