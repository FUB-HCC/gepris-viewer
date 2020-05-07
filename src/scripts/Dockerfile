FROM tensorflow/tensorflow:latest-py3

RUN pip install poetry

# We copy just the requirements.txt first to leverage Docker cache
ADD ./src/scripts/pyproject.toml ./pyproject.toml
ADD ./src/scripts/poetry.lock ./poetry.lock

RUN poetry config virtualenvs.create false
RUN poetry install

RUN python -m spacy download de_core_news_sm

# Create app directory
WORKDIR /app

ADD ./src/scripts/src ./

CMD python preprocess_and_train_models.py
