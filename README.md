# **SVG2PNG Converter**

An API to convert your SVG string to PNG throught url

---

### **1. How to use?**

1. Open url
   _[https://svg2pngconverter.herokuapp.com/](https://svg2pngconverter.herokuapp.com/)_
   <br/>
2. Add url parameter to link
   _[https://svg2pngconverter.herokuapp.com/?url=](https://svg2pngconverter.herokuapp.com/?url=)_
   <br/>
3. Then you can search for a SVG string like that

<img src="https://svg2pngconverter.herokuapp.com/?url=%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20class=%22icon%20icon-tabler%20icon-tabler-brand-github%22%20width=%2244%22%20height=%2244%22%20viewBox=%220%200%2024%2024%22%20stroke-width=%220.5%22%20stroke=%22%2300bfd8%22%20fill=%22none%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%20%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%20%3Cpath%20d=%22M9%2019c-4.3%201.4%20-4.3%20-2.5%20-6%20-3m12%205v-3.5c0%20-1%20.1%20-1.4%20-.5%20-2c2.8%20-.3%205.5%20-1.4%205.5%20-6a4.6%204.6%200%200%200%20-1.3%20-3.2a4.2%204.2%200%200%200%20-.1%20-3.2s-1.1%20-.3%20-3.5%201.3a12.3%2012.3%200%200%200%20-6.2%200c-2.4%20-1.6%20-3.5%20-1.3%20-3.5%20-1.3a4.2%204.2%200%200%200%20-.1%203.2a4.6%204.6%200%200%200%20-1.3%203.2c0%204.6%202.7%205.7%205.5%206c-.6%20.6%20-.6%201.2%20-.5%202v3.5%22%20/%3E%20%3C/svg%3E"
alt="Markdown Monster icon"
/>

```XML
SVG String:

    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="44" height="44" viewBox="0 0 24 24" stroke-width="0.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>
</svg>

```

4. You need to replace `'#'` character in fields like `'stroke="#ffffff"'` by `'%23'`

```CSS
    ...stroke="%23ffffff"...

```

5. Then you paste this string at `'url='` field 🎉

   [https://svg2pngconverter.herokuapp.com/?url=%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20class=%22icon%20icon-tabler%20icon-tabler-brand-github%22%20width=%2244%22%20height=%2244%22%20viewBox=%220%200%2024%2024%22%20stroke-width=%220.5%22%20stroke=%22%2300bfd8%22%20fill=%22none%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%20%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%20%3Cpath%20d=%22M9%2019c-4.3%201.4%20-4.3%20-2.5%20-6%20-3m12%205v-3.5c0%20-1%20.1%20-1.4%20-.5%20-2c2.8%20-.3%205.5%20-1.4%205.5%20-6a4.6%204.6%200%200%200%20-1.3%20-3.2a4.2%204.2%200%200%200%20-.1%20-3.2s-1.1%20-.3%20-3.5%201.3a12.3%2012.3%200%200%200%20-6.2%200c-2.4%20-1.6%20-3.5%20-1.3%20-3.5%20-1.3a4.2%204.2%200%200%200%20-.1%203.2a4.6%204.6%200%200%200%20-1.3%203.2c0%204.6%202.7%205.7%205.5%206c-.6%20.6%20-.6%201.2%20-.5%202v3.5%22%20/%3E%20%3C/svg%3E](https://svg2pngconverter.herokuapp.com/?url=%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20class=%22icon%20icon-tabler%20icon-tabler-brand-github%22%20width=%2244%22%20height=%2244%22%20viewBox=%220%200%2024%2024%22%20stroke-width=%220.5%22%20stroke=%22%2300bfd8%22%20fill=%22none%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%20%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%20%3Cpath%20d=%22M9%2019c-4.3%201.4%20-4.3%20-2.5%20-6%20-3m12%205v-3.5c0%20-1%20.1%20-1.4%20-.5%20-2c2.8%20-.3%205.5%20-1.4%205.5%20-6a4.6%204.6%200%200%200%20-1.3%20-3.2a4.2%204.2%200%200%200%20-.1%20-3.2s-1.1%20-.3%20-3.5%201.3a12.3%2012.3%200%200%200%20-6.2%200c-2.4%20-1.6%20-3.5%20-1.3%20-3.5%20-1.3a4.2%204.2%200%200%200%20-.1%203.2a4.6%204.6%200%200%200%20-1.3%203.2c0%204.6%202.7%205.7%205.5%206c-.6%20.6%20-.6%201.2%20-.5%202v3.5%22%20/%3E%20%3C/svg%3E)

---

**NOTE**

You can use this free amazing SVG icon site: [https://tablericons.com/](https://tablericons.com/)

---
