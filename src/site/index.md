---
title: Please edit me With Eleventy.
layout: default
---




<div class="listing">
{%- for item in sheet.content -%}
  <h1>{{ item.header }}</h1>
{%- endfor -%}
</div>


<div class="listing">
{%- for item in sheet.content -%}
  <h4>{{ item.header2 }} {{ item.body }}</h4>
{%- endfor -%}
</div>



## Mars sei un figo

<div class="listing">
{%- for item in sheet.content -%}
  <h4>{{ item.body2 }}</h4>
<a href="https://docs.google.com/spreadsheets/d/1-rdzDOXdzMi9whPxKAKZxo-vaytH8tMtbL1f1zhrNEk/edit#gid=0">https://docs.google.com/spreadsheets/d/1-rdzDOXdzMi9whPxKAKZxo-vaytH8tMtbL1f1zhrNEk/edit#gid=0</a>  
  <h4></h4>
{%- endfor -%}
</div>

<ul class="listing">
{%- for item in sheet.content -%}
  <li>{{ item.body3 }}</li>
  <li>{{ item.body4 }}</li>
  <li>{{ item.body5 }}</li>
  <li>{{ item.body6 }}</li>
  <li>{{ item.immagine }}</li>
{%- endfor -%}
</ul>

<div class="external">

## Clonami, se vuoi

[![Hosted repo](https://avatars3.githubusercontent.com/u/22106995?s=460&v=4)](https://github.com/trinkolleffe/)

</div>



