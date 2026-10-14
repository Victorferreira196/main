# Projetos de estudo — front-end

Coleção de pequenos projetos em HTML, CSS e JavaScript feitos durante os estudos de desenvolvimento web.
Cada pasta é independente: basta abrir o `index.html` no navegador.

| Projeto | O que é | Tecnologias |
|---|---|---|
| [`agencia-fake`](agencia-fake/) | Landing page responsiva de uma agência digital fictícia | HTML, CSS |
| [`orcamento-pessoal`](orcamento-pessoal/) | App de orçamento pessoal com cadastro e consulta de despesas | HTML, JavaScript, Bootstrap |
| [`conversor-romanos`](conversor-romanos/) | Conversor de números arábicos para algarismos romanos | HTML, JavaScript, Bootstrap |
| [`treemap`](treemap/) | Visualização em treemap das maiores empresas do mundo | HTML, JavaScript, AnyChart |
| [`jogo-mata-mosquito`](jogo-mata-mosquito/) | Jogo de clicar nos mosquitos antes que as vidas acabem | HTML, CSS, JavaScript |
| [`radar-el-nino`](radar-el-nino/) | Mapa interativo dos impactos do El Niño 2026/27 no mundo e no Brasil, com a série histórica do ONI | HTML, JavaScript, D3 |

## Como rodar

```bash
git clone https://github.com/Victorferreira196/main.git
cd main/<projeto>
# abra o index.html no navegador, ou sirva a pasta:
python3 -m http.server 8000
```

## Skills do Claude

A pasta [`.claude/skills/`](.claude/skills/) traz skills para criar apps com o Claude Code. Elas são carregadas automaticamente quando o Claude trabalha neste repositório.

| Skill | Para quê |
|---|---|
| `frontend-design` | Direção visual e tipografia para interfaces com cara própria |
| `web-artifacts-builder` | Apps web com React, Tailwind e shadcn/ui empacotados num único HTML |
| `mcp-builder` | Servidores MCP para conectar o Claude a APIs e serviços |
| `theme-factory` | Temas prontos de cores e fontes para aplicar em páginas e apps |
| `skill-creator` | Criar e testar novas skills |

Todas são da Anthropic, sob licença Apache 2.0 (veja o `LICENSE.txt` de cada pasta).
