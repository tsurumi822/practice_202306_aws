FROM --platform=linux/x86_64 ruby:3.2.2

ENV LANG C.UTF-8
# ENV RAILS_ENV=production

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

WORKDIR /myapp
RUN mkdir -p tmp/sockets

COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock

RUN gem install bundler
RUN bundle install

COPY . /myapp

VOLUME /myapp/public
VOLUME /myapp/tmp


CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]
