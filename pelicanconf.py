#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Tryton'
SITENAME = u'Tryton'
SITEURL = ''

PATH = 'content'
PAGE_PATHS = ['pages']
ARTICLE_PATHS = ['articles']

PLUGIN_PATHS = ['pelican-plugins']
PLUGINS = ['i18n_subsites', ]

# Internationalization
JINJA_EXTENSIONS = ['jinja2.ext.i18n',]
I18N_GETTEXT_LOCALEDIR = 'i18n/'
I18N_GETTEXT_DOMAIN = 'messages'
I18N_SUBSITES = {
    'fr': {}
}


TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
    ('You can modify those links in your config file', '#'),
)

# Social widget
SOCIAL = (
    ('You can add links in your config file', '#'),
    ('Another social link', '#'),
)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True


THEME = 'theme'

TEMPLATE_PAGES = {
    'features.html': 'features.html',
}
