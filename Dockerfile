FROM node:14.16.0-alpine
RUN node --version


COPY ./ /react-shopping-cart/
WORKDIR /react-shopping-cart/
CMD npm start