export default {
  render() {
    return `
  <template>
    <vtk-view>
      <vtk-geometry-representation>
        <vtk-polydata :points="[0, 0, 0, 0, 1, 0, 1, 0, 0]" :polys="[3, 0, 1, 2]">
          <vtk-point-data>
            <vtk-data-array
              registration="setScalars"
              name="temperature"
              :values="[0, 0.5, 1]"
            />
          </vtk-point-data>
        </vtk-polydata>
      </vtk-geometry-representation>
    </vtk-view>
  </template>`
  }
}