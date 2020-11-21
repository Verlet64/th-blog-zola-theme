develop:
	zola serve & yarn develop

build:
	yarn build:prod && zola build

install: 
	cp static/styles.css ../../static/styles.css

.PHONY: develop build install