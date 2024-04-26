from langchain_openai import OpenAIEmbeddings
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import CharacterTextSplitter
from langchain_pinecone import PineconeVectorStore
import os
from langchain_openai import ChatOpenAI
from langchain.schema import (
    SystemMessage,
    HumanMessage,
    AIMessage
)


from langchain_openai import OpenAIEmbeddings
os.environ['PINECONE_API_KEY'] = 'b5eb531b-3d10-482c-9f76-2e636aeb89bb'

## extract disease text from pdf file

pdf_files = ['pdfdata/drugs_and_cure.pdf',
             'pdfdata/Health_Organization.pdf',
             'pdfdata/Migraine--Developing-Drugs-for-Acute-Treatment.pdf',
             'pdfdata/Pharmacological_treatment.pdf',
             'pdfdata/SOME_COMMON_HUMAN_DISEASES.pdf'
             ]


#embeddings = OpenAIEmbeddings()

def ExtractpdfData(Pdffile,open_api_key):
   loader = PyPDFLoader(Pdffile)
   text_splitter = CharacterTextSplitter(
    separator="\n\n",
    chunk_size=1000,
    chunk_overlap=200,
    length_function=len,
    is_separator_regex=False,
)
   doc = text_splitter.split_documents(loader.load())
   embeddings =OpenAIEmbeddings(api_key=open_api_key)
  
   vectostore = PineconeVectorStore.from_documents(doc, embeddings, index_name='linksarticles')
   return 


## chatbot functions

## query pinecone



def augment_prompt(query,open_api_key,index_name):
   
    chat = ChatOpenAI(
    model='gpt-3.5-turbo',
    api_key=open_api_key
)
    vectorstore = PineconeVectorStore(index_name=index_name, embedding=OpenAIEmbeddings(api_key=open_api_key))
    messages = [
    SystemMessage(content="You are a health care assistant."),
    AIMessage(content="I'm great thank you. How can I help you?")
    ]
    # get top 3 results from knowledge base
    results = vectorstore.similarity_search(query, k=3)
    # get the text from the results
    source_knowledge = "\n".join([x.page_content for x in results])
    # feed into an augmented prompt
    augmented_prompt = f"""Using the contexts below, answer the query

    Contexts:
    {source_knowledge}

    Query: {query}"""
    prompt = HumanMessage(
    content=augmented_prompt
    )
    messages.append(prompt)
    response = chat(messages)
    return response.content


