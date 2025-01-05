import { defineType , defineField } from "sanity";

export default defineType({
    name:"blog",
    title:"Blogs",
    type: "document",
    fields:[
        defineField({
            name:"heading",
            title:"Title",
            type: "string"
        }),

        defineField({
            name:"description",
            title:"description",
            type: "text"
        }),
        
        defineField({
            name:"slug",
            title:"slug",
            type: "slug",
            options:{
                source:"heading",
                maxLength:200
            }
        }),
        defineField({
            name:"image",
            title:"Image",
            type: "image",
            options:{
                hotspot:true
            }
        }),
    ]
})