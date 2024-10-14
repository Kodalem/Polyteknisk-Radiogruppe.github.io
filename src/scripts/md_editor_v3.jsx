import { defineComponent, ref } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const dummy_text = `# Hello World
This is a markdown editor. You can write your markdown text here.
> This is a blockquote.
- This is a list item.
[This is a link](https://www.google.com)
**This is bold text**
*This is italic text*

Here is a code block:
\`\`\`rust
fn main() {
    println!("Hello, World!");
}
\`\`\`
`


export default defineComponent({
    name: 'MdEditor',
    setup() {
        const text = ref(dummy_text);
        const onChange = (v) => (text.value = v);

        return () => <MdEditor modelValue={text.value} onChange={onChange} />;
    }


});