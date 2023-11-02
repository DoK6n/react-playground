type ShowProps = {
  when: boolean
  fallback?: React.ReactNode
  children?: React.ReactNode
}

/**
 *
 * @example
 * return (
 *  <Show when={isEditing} fallback={<ReadableContent />}>
 *    <Editor />
 *  </Show>
 *  <Show when={isEditing}>
 *    <Editor />
 *  </Show>
 * )
 */
export default function Show({ when, fallback = null, children }: ShowProps) {
  return when ? children : fallback
}
