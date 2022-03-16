import React, { useEffect } from 'react'

export default function BlogComments(props) {
  useEffect(() => {
    window.DiscourseEmbed = {
      discourseUrl: 'https://forum.cooperationdenton.org/',
      discourseEmbedUrl: `https://cooperationdenton.org/blog/${props.slug}`,
    }

    const d = document.createElement('script')
    d.type = 'text/javascript'
    d.async = true
    d.src = window.DiscourseEmbed.discourseUrl + 'javascripts/embed.js'
    ;(
      document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]
    ).appendChild(d)
  }, [props.slug])

  return (
    <div style={{ padding: '1rem 10%' }}>
      <div id="discourse-comments"></div>
    </div>
  )
}
