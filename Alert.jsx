import React, { Fragment } from 'react'
import styled from 'styled-components'
import t from 'prop-types'

const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
}

const AlertStyled = styled('div')`
  padding: 15px 20px;
  background: white;
  border-radius: 3px;
  color: white;
  background: ${({ kind = 'info' }) => kinds[kind]};
`

export const Alert = props => <AlertStyled {...props} />

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
}

Alert.defaultProps = {
  kind: 'info',
}

export function EditButton(props) {
  let encodedStatus = encodeURIComponent(
      "This live editor looks pretty darn handy #JavaScript"
  )
  let encodedURL = encodeURIComponent(
      "https://ecs.chenxixian.cn/chenxixian/docz/src/master"
  )

  return (
      <a
          href={`https://ecs.chenxixian.cn/chenxixian/docz/_edit/master/ALert.mdx`}
          target="_blank"
          className="EditButton">
        Edit This Page!
      </a>
  )
}